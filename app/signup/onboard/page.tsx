'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/stories/Button/Button';
import { TextField } from '@/stories/TextField/TextField';
import { Card, CardTitle, CardSubtitle } from '@/stories/Card/Card';
import { NavigationLink } from '@/stories/NavigationLink/NavigationLink';
import { StepIndicator } from '@/stories/StepIndicator/StepIndicator';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted!');
    // Add your submit logic here
  };

  return (
    <div className="flex flex-1 gap-24">
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[627px]">
          {/* Progress Indicator */}
          {/* <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                  step <= currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-text-dark/60 text-right mb-4">
            Step {currentStep} of {totalSteps}
          </p> */}

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <CardTitle>Welcome, Anna!</CardTitle>
              <CardSubtitle>
                There are just a couple more steps before your Lawbrokr account is ready for
                prospects!
              </CardSubtitle>
              <Button
                borderRadius="md"
                label="Begin Account Set Up"
                onClick={nextStep}
                variant="primary"
              />
            </div>
          )}

          {/* Step 2: Company Details */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <StepIndicator
                steps={[
                  { label: 'Personal Info', status: 'completed' },
                  { label: 'Account Info', status: 'active' },
                  { label: 'Confirmation', status: 'inactive' },
                ]}
              />
              <CardTitle>Cover your bases</CardTitle>
              <CardSubtitle>Add your terms of service and privacy policy URLs.</CardSubtitle>
              <TextField
                label="Terms of Service"
                onChange={() => {}}
                placeholder="termsofservice.com"
                state="default"
                value=""
                variant="form"
              />
              <TextField
                label="Privacy Policy"
                onChange={() => {}}
                placeholder="privacypolicy.com"
                state="default"
                value=""
                variant="form"
              />
              <Button borderRadius="md" label="Next" onClick={nextStep} variant="primary" />
              <div className="flex justify-between">
                <NavigationLink label="Go back" direction="prev" onClick={prevStep} />
                <NavigationLink label="Skip this step" direction="next" onClick={nextStep} />
              </div>
            </div>
          )}

          {/* Step 3: Account Setup */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-6">
              <CardTitle>Account Setup</CardTitle>
              <TextField
                label="Username"
                onChange={() => {}}
                placeholder="Choose a username"
                state="default"
                value=""
                variant="form"
              />
              <TextField
                label="Password"
                onChange={() => {}}
                placeholder="Enter a secure password"
                state="default"
                value=""
                variant="form"
              />
              <TextField
                label="Confirm Password"
                onChange={() => {}}
                placeholder="Re-enter your password"
                state="default"
                value=""
                variant="form"
              />
            </div>
          )}

          {/* Step 4: Preferences */}
          {currentStep === 4 && (
            <div className="flex flex-col gap-6">
              <CardTitle>Preferences</CardTitle>
              <TextField
                label="Industry"
                onChange={() => {}}
                placeholder="e.g., Technology, Healthcare, Finance"
                state="default"
                value=""
                variant="form"
              />
              <TextField
                label="Role"
                onChange={() => {}}
                placeholder="e.g., Developer, Manager, Executive"
                state="default"
                value=""
                variant="form"
              />
              <TextField
                label="How did you hear about us?"
                onChange={() => {}}
                placeholder="e.g., Google, Referral, Social Media"
                state="default"
                value=""
                variant="form"
              />
            </div>
          )}

          {/* Step 5: Review & Confirm */}
          {currentStep === 5 && (
            <div className="flex flex-col gap-6">
              <CardTitle>Review & Confirm</CardTitle>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-text-dark mb-4">Summary</h3>
                <div className="space-y-2 text-sm text-text-dark/70">
                  <p>
                    <strong>Name:</strong> [Your Name]
                  </p>
                  <p>
                    <strong>Email:</strong> [Your Email]
                  </p>
                  <p>
                    <strong>Company:</strong> [Company Name]
                  </p>
                  <p>
                    <strong>Industry:</strong> [Industry]
                  </p>
                  <p>
                    <strong>Role:</strong> [Role]
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-dark/60">
                By clicking "Complete Setup", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          {/* <div className="flex justify-between mt-6">
            <Button
              label="Back"
              variant="outlined"
              onClick={prevStep}
              disabled={currentStep === 1}
              borderRadius="md"
            />
            {currentStep < totalSteps ? (
              <Button label="Next" variant="primary" onClick={nextStep} borderRadius="md" />
            ) : (
              <Button
                label="Complete Setup"
                variant="success"
                onClick={handleSubmit}
                borderRadius="md"
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
