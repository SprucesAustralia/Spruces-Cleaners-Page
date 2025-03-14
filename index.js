import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Authentication functions
export const signUp = async (email, password, userData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData, // Store additional user data in the metadata
    },
  });
  
  if (error) throw error;
  
  // If signup successful, create a profile record
  if (data?.user) {
    await createProfile(data.user.id, userData);
  }
  
  return data;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data?.user;
};

// Profile functions
export const createProfile = async (userId, profileData) => {
  const { error } = await supabase
    .from('profiles')
    .insert([
      { 
        user_id: userId,
        full_name: profileData.fullName,
        email: profileData.email,
        phone: profileData.phone,
        address: profileData.address,
        suburb: profileData.suburb,
        state: profileData.state,
        abn: profileData.abn,
        driver_license: profileData.driverLicense,
        license_number: profileData.licenseNumber,
        bank_name: profileData.bankName,
        account_name: profileData.accountName,
        bsb: profileData.bsb,
        account_number: profileData.accountNumber,
        cleaning_experience: profileData.cleaningExperience,
        white_card: profileData.whiteCard,
        blue_card: profileData.blueCard,
        police_check: profileData.policeCheck,
        created_at: new Date(),
      }
    ]);
  
  if (error) throw error;
};

export const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

export const updateProfile = async (userId, updates) => {
  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('user_id', userId);
  
  if (error) throw error;
};

// Job functions
export const getJobs = async (filters = {}) => {
  let query = supabase.from('jobs').select('*');
  
  // Apply filters if provided
  if (filters.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }
  
  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  
  if (filters.minPay) {
    query = query.gte('pay_per_cleaner', filters.minPay);
  }
  
  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const getJob = async (jobId) => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', jobId)
    .single();
  
  if (error) throw error;
  return data;
};

export const createJob = async (jobData) => {
  const { data, error } = await supabase
    .from('jobs')
    .insert([
      {
        project: jobData.project,
        dates: jobData.dates,
        location: jobData.location,
        category: jobData.category,
        cleaners_needed: jobData.cleaners,
        pay_per_cleaner: jobData.payPerCleaner,
        hours_per_day: jobData.hoursPerDay,
        description: jobData.description,
        created_at: new Date(),
      }
    ])
    .select();
  
  if (error) throw error;
  return data[0];
};

export const updateJob = async (jobId, updates) => {
  const { error } = await supabase
    .from('jobs')
    .update(updates)
    .eq('id', jobId);
  
  if (error) throw error;
};

export const deleteJob = async (jobId) => {
  const { error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', jobId);
  
  if (error) throw error;
};

// Job application functions
export const applyToJob = async (userId, jobId, applicationData) => {
  const { data, error } = await supabase
    .from('job_applications')
    .insert([
      {
        user_id: userId,
        job_id: jobId,
        status: 'pending',
        notes: applicationData.notes,
        availability: applicationData.availability,
        created_at: new Date(),
      }
    ])
    .select();
  
  if (error) throw error;
  return data[0];
};

export const getUserApplications = async (userId) => {
  const { data, error } = await supabase
    .from('job_applications')
    .select(`
      *,
      jobs:job_id (*)
    `)
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

export const getJobApplications = async (jobId) => {
  const { data, error } = await supabase
    .from('job_applications')
    .select(`
      *,
      profiles:user_id (*)
    `)
    .eq('job_id', jobId);
  
  if (error) throw error;
  return data;
};

export const updateApplicationStatus = async (applicationId, status) => {
  const { error } = await supabase
    .from('job_applications')
    .update({ status })
    .eq('id', applicationId);
  
  if (error) throw error;
};

// Training course functions
export const getCourses = async (category = null) => {
  let query = supabase.from('courses').select('*');
  
  if (category) {
    query = query.eq('category', category);
  }
  
  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const getCourse = async (courseId) => {
  const { data, error } = await supabase
    .from('courses')
    .select(`
      *,
      sections:course_sections (
        *,
        questions:course_questions (*)
      )
    `)
    .eq('id', courseId)
    .single();
  
  if (error) throw error;
  return data;
};

export const createCourse = async (courseData) => {
  const { data, error } = await supabase
    .from('courses')
    .insert([
      {
        title: courseData.title,
        description: courseData.description,
        category: courseData.category,
        image_url: courseData.imageUrl,
        created_at: new Date(),
      }
    ])
    .select();
  
  if (error) throw error;
  return data[0];
};

export const updateCourse = async (courseId, updates) => {
  const { error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', courseId);
  
  if (error) throw error;
};

export const deleteCourse = async (courseId) => {
  const { error } = await supabase
    .from('courses')
    .delete()
    .eq('id', courseId);
  
  if (error) throw error;
};

// Course enrollment functions
export const enrollInCourse = async (userId, courseId) => {
  const { data, error } = await supabase
    .from('course_enrollments')
    .insert([
      {
        user_id: userId,
        course_id: courseId,
        status: 'in_progress',
        progress: 0,
        created_at: new Date(),
      }
    ])
    .select();
  
  if (error) throw error;
  return data[0];
};

export const getUserEnrollments = async (userId) => {
  const { data, error } = await supabase
    .from('course_enrollments')
    .select(`
      *,
      courses:course_id (*)
    `)
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

export const updateEnrollmentProgress = async (enrollmentId, progress, status = null) => {
  const updates = { progress };
  if (status) updates.status = status;
  
  const { error } = await supabase
    .from('course_enrollments')
    .update(updates)
    .eq('id', enrollmentId);
  
  if (error) throw error;
};

export const getCourseEnrollments = async (courseId) => {
  const { data, error } = await supabase
    .from('course_enrollments')
    .select(`
      *,
      profiles:user_id (*)
    `)
    .eq('course_id', courseId);
  
  if (error) throw error;
  return data;
};

// Admin functions
export const getAllUsers = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const getUserWithCourses = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      enrollments:course_enrollments (
        *,
        courses:course_id (*)
      )
    `)
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

export const getUserWithApplications = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      applications:job_applications (
        *,
        jobs:job_id (*)
      )
    `)
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};
