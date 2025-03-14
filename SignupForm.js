import React, { useState } from 'react';
import { 
  UserIcon, 
  PhoneIcon, 
  MailIcon, 
  HomeIcon, 
  BriefcaseIcon, 
  IdentificationIcon,
  CreditCardIcon,
  TruckIcon,
  DocumentTextIcon,
  ClipboardCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Organize questions from PDF into sections with 3-4 questions each
const formSections = [
  {
    id: 'personal-info',
    title: 'Personal Information',
    questions: [
      {
        id: 'full-name',
        title: 'What is your full name?',
        type: 'text',
        icon: <UserIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'email',
        title: 'What is your email address?',
        type: 'email',
        icon: <MailIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'phone',
        title: 'What is your phone number?',
        type: 'tel',
        icon: <PhoneIcon className="w-6 h-6" />,
        required: true,
      },
    ]
  },
  {
    id: 'nationality',
    title: 'Nationality & Location',
    questions: [
      {
        id: 'nationality',
        title: 'Please select your country of origin (Nationality)',
        type: 'select',
        icon: <HomeIcon className="w-6 h-6" />,
        options: ['Australia', 'India', 'Spain', 'France', 'Colombia', 'Philippines', 'Argentina', 'Other'],
        required: true,
      },
      {
        id: 'address',
        title: 'What is your address?',
        type: 'text',
        icon: <HomeIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'suburb',
        title: 'What suburb do you live in?',
        type: 'text',
        icon: <HomeIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'state',
        title: 'Which state are you in?',
        type: 'select',
        icon: <HomeIcon className="w-6 h-6" />,
        options: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'],
        required: true,
      },
    ]
  },
  {
    id: 'identification',
    title: 'Identification & Legal Requirements',
    questions: [
      {
        id: 'abn',
        title: 'What is your ABN?',
        type: 'text',
        icon: <IdentificationIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'driver-license',
        title: 'Do you have a driver license?',
        type: 'radio',
        icon: <IdentificationIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
      {
        id: 'license-number',
        title: 'What is your driver license number?',
        type: 'text',
        icon: <IdentificationIcon className="w-6 h-6" />,
        required: false,
        conditionalOn: {
          questionId: 'driver-license',
          value: 'Yes'
        }
      },
    ]
  },
  {
    id: 'banking',
    title: 'Banking Details',
    questions: [
      {
        id: 'bank-name',
        title: 'What is your bank name?',
        type: 'text',
        icon: <CreditCardIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'account-name',
        title: 'What is your account name?',
        type: 'text',
        icon: <CreditCardIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'bsb',
        title: 'What is your BSB?',
        type: 'text',
        icon: <CreditCardIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'account-number',
        title: 'What is your account number?',
        type: 'text',
        icon: <CreditCardIcon className="w-6 h-6" />,
        required: true,
      },
    ]
  },
  {
    id: 'experience',
    title: 'Cleaning Experience',
    questions: [
      {
        id: 'cleaning-type',
        title: 'What type of cleaning have you done before? 🧼',
        type: 'radio',
        icon: <BriefcaseIcon className="w-6 h-6" />,
        options: [
          'Both Residential and Commercial (Paid)',
          'Residential (Paid)',
          'Commercial (Paid)',
          'Just around my home',
          'No cleaning experience'
        ],
        required: true,
      },
      {
        id: 'experience-length',
        title: 'How long have you been doing cleaning?',
        type: 'radio',
        icon: <ClockIcon className="w-6 h-6" />,
        options: [
          'My whole life!',
          'more than 2 years',
          'around 2 Years',
          'around 1 Year',
          'About 6 Months',
          'Couple of months',
          'Just started!'
        ],
        required: true,
      },
      {
        id: 'skill-acquisition',
        title: 'How quickly do you feel you can pick up professional cleaning skills?',
        type: 'radio',
        icon: <AcademicCapIcon className="w-6 h-6" />,
        options: [
          'I am very resourceful! I have been watching training videos and I think I will pick it up quickly!',
          'I just need to shadow (follow) someone and I will eventually pick it up',
          'If I receive a couple of weeks worth of in-person training ill be fine!'
        ],
        required: true,
      },
    ]
  },
  {
    id: 'references',
    title: 'References',
    questions: [
      {
        id: 'reference-1-name',
        title: 'Reference 1: Name',
        type: 'text',
        icon: <UserIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'reference-1-contact',
        title: 'Reference 1: Contact Number (must be a 1300 number or landline)',
        type: 'tel',
        icon: <PhoneIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'reference-1-permission',
        title: 'Are you cool for us to contact this reference as part of your reference check?',
        type: 'radio',
        icon: <CheckCircleIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
      {
        id: 'reference-2-name',
        title: 'Reference 2: Name',
        type: 'text',
        icon: <UserIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'reference-2-contact',
        title: 'Reference 2: Contact Number (must be a 1300 number or landline)',
        type: 'tel',
        icon: <PhoneIcon className="w-6 h-6" />,
        required: true,
      },
      {
        id: 'reference-2-permission',
        title: 'Are you cool for us to contact this reference as part of your reference check?',
        type: 'radio',
        icon: <CheckCircleIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
    ]
  },
  {
    id: 'tools-experience',
    title: 'Tools & Experience',
    questions: [
      {
        id: 'tools-used',
        title: 'What tools have you used before? Select all that apply',
        type: 'checkbox',
        icon: <BriefcaseIcon className="w-6 h-6" />,
        options: [
          'Cleaning chemicals',
          'Mop and bucket',
          'Common materials',
          'Backpack Vacuum',
          'Micro Fiber mop',
          'Window Cleaning tools',
          'Push Vacuum',
          'Other including machines',
          'BodyCamera'
        ],
        required: true,
      },
      {
        id: 'comfortable-areas',
        title: 'In what areas of cleaning do you feel most comfortable?',
        type: 'checkbox',
        icon: <CheckCircleIcon className="w-6 h-6" />,
        options: [
          'Office area',
          'Floors',
          'Kitchens',
          'Building common areas',
          'Outdoors',
          'Room making',
          'Windows',
          'Toilets',
          'Deep Clean'
        ],
        required: true,
      },
      {
        id: 'training-areas',
        title: 'In what areas of cleaning would you like training?',
        type: 'checkbox',
        icon: <AcademicCapIcon className="w-6 h-6" />,
        options: [
          'Room making',
          'Outdoors',
          'Deep Clean',
          'Floors',
          'Kitchens',
          'Office area',
          'Building common areas',
          'Windows',
          'Toilets'
        ],
        required: true,
      },
    ]
  },
  {
    id: 'work-preferences',
    title: 'Work Preferences',
    questions: [
      {
        id: 'work-style',
        title: 'How are you most comfortable working?',
        type: 'checkbox',
        icon: <UserGroupIcon className="w-6 h-6" />,
        options: [
          'Paired with someone',
          'Alone',
          'Larger teams'
        ],
        required: true,
      },
      {
        id: 'cleaning-priorities',
        title: 'What would you prioritize cleaning first if you have a short amount of time? (select up to 3)',
        type: 'checkbox',
        icon: <ClipboardCheckIcon className="w-6 h-6" />,
        options: [
          'Toilets',
          'taking out rubbish',
          'kitchen',
          'Entrance to the building',
          'Doors',
          'Store room',
          'Vents'
        ],
        maxSelections: 3,
        required: true,
      },
      {
        id: 'has-car',
        title: 'Do you have a car? 🚗 Don\'t panic there is always a solution',
        type: 'radio',
        icon: <TruckIcon className="w-6 h-6" />,
        options: [
          'Yes',
          'No',
          'I will buy/rent one soon'
        ],
        required: true,
      },
      {
        id: 'work-with-others',
        title: 'Are you okay to work with other people?',
        type: 'radio',
        icon: <UserGroupIcon className="w-6 h-6" />,
        options: [
          'Yes',
          'No'
        ],
        required: true,
      },
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications & Documents',
    questions: [
      {
        id: 'white-card',
        title: 'Do you have a White Card?',
        type: 'radio',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
      {
        id: 'blue-card',
        title: 'Do you have a Blue Card?',
        type: 'radio',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
      {
        id: 'police-check',
        title: 'Do you have a Police Check?',
        type: 'radio',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
    ]
  },
  {
    id: 'agreement',
    title: 'Agreement',
    questions: [
      {
        id: 'nda',
        title: 'NON-DISCLOSURE AGREEMENT: I agree to keep all client information confidential',
        type: 'radio',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
      {
        id: 'terms',
        title: 'I agree to the Terms and Conditions',
        type: 'radio',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        options: ['Yes', 'No'],
        required: true,
      },
    ]
  }
];

const SignupForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  const handleInputChange = (questionId, value) => {
    setFormData({
      ...formData,
      [questionId]: value
    });
  };

  const handleCheckboxChange = (questionId, option, isChecked) => {
    const currentSelections = formData[questionId] || [];
    let newSelections;
    
    if (isChecked) {
      newSelections = [...currentSelections, option];
    } else {
      newSelections = currentSelections.filter(item => item !== option);
    }
    
    setFormData({
      ...formData,
      [questionId]: newSelections
    });
  };

  const handleNext = () => {
    if (currentSection < formSections.length - 1) {
      setCurrentSection(currentSection + 1);
      setProgress(((currentSection + 1) / (formSections.length - 1)) * 100);
      window.scrollTo(0, 0);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your API
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setProgress(((currentSection - 1) / (formSections.length - 1)) * 100);
      window.scrollTo(0, 0);
    }
  };

  const isCurrentSectionValid = () => {
    const currentQuestions = formSections[currentSection].questions;
    
    for (const question of currentQuestions) {
      // Skip validation for conditional questions that shouldn't be shown
      if (question.conditionalOn) {
        const conditionMet = formData[question.conditionalOn.questionId] === question.conditionalOn.value;
        if (!conditionMet) continue;
      }
      
      if (question.required) {
        const answer = formData[question.id];
        
        if (!answer) return false;
        
        if (question.type === 'checkbox' && answer.length === 0) return false;
        
        if (question.maxSelections && answer.length > question.maxSelections) return false;
      }
    }
    
    return true;
  };

  const renderQuestion = (question) => {
    // Check if this is a conditional question that should be hidden
    if (question.conditionalOn) {
      const conditionMet = formData[question.conditionalOn.questionId] === question.conditionalOn.value;
      if (!conditionMet) return null;
    }

    return (
      <motion.div 
        key={question.id} 
        className="typeform-question"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="typeform-question-title">
          <span className="typeform-question-icon">{question.icon}</span>
          {question.title}
          {question.required && <span className="text-red-500 ml-1">*</span>}
        </div>
        
        {question.type === 'text' && (
          <motion.input
            type="text"
            id={question.id}
            className="typeform-input"
            value={formData[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            required={question.required}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)" }}
            transition={{ duration: 0.2 }}
          />
        )}
        
        {question.type === 'email' && (
          <motion.input
            type="email"
            id={question.id}
            className="typeform-input"
            value={formData[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            required={question.required}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)" }}
            transition={{ duration: 0.2 }}
          />
        )}
        
        {question.type === 'tel' && (
          <motion.input
            type="tel"
            id={question.id}
            className="typeform-input"
            value={formData[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            required={question.required}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)" }}
            transition={{ duration: 0.2 }}
          />
        )}
        
        {question.type === 'select' && (
          <motion.select
            id={question.id}
            className="typeform-input"
            value={formData[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            required={question.required}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)" }}
            transition={{ duration: 0.2 }}
          >
            <option value="">Select an option</option>
            {question.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </motion.select>
        )}
        
        {question.type === 'radio' && (
          <div className="space-y-2">
            {question.options.map((option, idx) => (
              <motion.label 
                key={option} 
                className={`typeform-option ${formData[question.id] === option ? 'typeform-option-selected' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={formData[question.id] === option}
                  onChange={() => handleInputChange(question.id, option)}
                  className="sr-only"
                />
                <CheckCircleIcon className={`w-5 h-5 typeform-option-icon ${formData[question.id] === option ? 'text-primary' : 'text-gray-300'}`} />
                {option}
              </motion.label>
            ))}
          </div>
        )}
        
        {question.type === 'checkbox' && (
          <div className="space-y-2">
            {question.options.map((option, idx) => {
              const isSelected = (formData[question.id] || []).includes(option);
              return (
                <motion.label 
                  key={option} 
                  className={`typeform-option ${isSelected ? 'typeform-option-selected' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="checkbox"
                    name={question.id}
                    value={option}
                    checked={isSelected}
                    onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)}
                    className="sr-only"
                  />
                  <CheckCircleIcon className={`w-5 h-5 typeform-option-icon ${isSelected ? 'text-primary' : 'text-gray-300'}`} />
                  {option}
                </motion.label>
              );
            })}
            {question.maxSelections && (
              <p className="text-sm text-gray-500 mt-2">
                Please select up to {question.maxSelections} options.
                {formData[question.id] && formData[question.id].length > question.maxSelections && (
                  <span className="text-red-500 ml-1">
                    You've selected {formData[question.id].length} options.
                  </span>
                )}
              </p>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  const currentSectionData = formSections[currentSection];

  return (
    <div className="typeform-container">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSection}
          className="typeform-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {currentSectionData.title}
          </motion.h2>
          
          {currentSectionData.questions.map(renderQuestion)}
          
          <motion.div 
            className="flex justify-between mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {currentSection > 0 && (
              <motion.button 
                type="button" 
                onClick={handlePrevious}
                className="typeform-button bg-gray-500 hover:bg-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
            )}
            <motion.button 
              type="button" 
              onClick={handleNext}
              disabled={!isCurrentSectionValid()}
              className={`typeform-button ml-auto ${!isCurrentSectionValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={isCurrentSectionValid() ? { scale: 1.05 } : {}}
              whileTap={isCurrentSectionValid() ? { scale: 0.95 } : {}}
            >
              {currentSection === formSections.length - 1 ? 'Submit' : 'Next'}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      <div className="typeform-progress">
        <motion.div 
          className="typeform-progress-bar" 
          initial={{ width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SignupForm;
