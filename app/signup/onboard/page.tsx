'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/stories/Button/Button';
import { TextField } from '@/stories/TextField/TextField';
import { Card, CardTitle, CardSubtitle } from '@/stories/Card/Card';
import { NavigationLink } from '@/stories/NavigationLink/NavigationLink';
import { StepIndicator } from '@/stories/StepIndicator/StepIndicator';
import { Checkbox } from '@/stories/Checkbox/Checkbox';
import { LoadingSpinner } from '@/stories/LoadingSpinner/LoadingSpinner';
import { Icon } from '@/stories/Icon/Icon';

import { SelectButton } from '@/stories/SelectButton/SelectButton';
import { DocumentUpload } from '@/stories/DocumentUpload/DocumentUpload';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

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
  };

  return (
    <div className="flex flex-1 gap-24">
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[627px]">
          {/* Step 1 */}
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

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'active' },
                    { label: 'Account Info', status: 'inactive' },
                    { label: 'Confirmation', status: 'inactive' },
                  ]}
                />
              </div>
              <CardTitle>Personal information</CardTitle>
              {/* <CardSubtitle>Add your terms of service and privacy policy URLs.</CardSubtitle> */}
              <TextField
                label="Email"
                onChange={() => {}}
                placeholder="name@flowbite.com"
                state="default"
                value=""
                variant="form"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  label="Password"
                  onChange={() => {}}
                  placeholder="••••••••••"
                  state="default"
                  value=""
                  variant="form"
                />
                <TextField
                  label="Confirm Password"
                  onChange={() => {}}
                  placeholder="••••••••••"
                  state="default"
                  value=""
                  variant="form"
                />
              </div>
              <Checkbox
                label="By signing up, you are creating a Lawbrokr account, and you agree to the Terms of
              Service and Privacy Policy."
                onChange={() => {}}
              />
              <Button
                borderRadius="md"
                label="Next: Account Info"
                onClick={nextStep}
                variant="primary"
              />
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'completed' },
                    { label: 'Account Info', status: 'active' },
                    { label: 'Confirmation', status: 'inactive' },
                  ]}
                />
              </div>
              <CardTitle>Choose your URL</CardTitle>
              <CardSubtitle>
                This will be your main URL that all landing pages, funnels, and workflows extend
                from.
              </CardSubtitle>
              <TextField
                onChange={() => {}}
                placeholder=".lawbrokr.com"
                state="default"
                value=""
                variant="form"
              />
              <Button borderRadius="md" label="Next" onClick={nextStep} variant="primary" />
            </div>
          )}

          {/* Step 4 */}
          {currentStep === 4 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'completed' },
                    { label: 'Account Info', status: 'active' },
                    { label: 'Confirmation', status: 'inactive' },
                  ]}
                />
              </div>
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

          {/* Step 5 */}
          {currentStep === 5 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'completed' },
                    { label: 'Account Info', status: 'active' },
                    { label: 'Confirmation', status: 'inactive' },
                  ]}
                />
              </div>
              <CardTitle>Select your practice areas</CardTitle>
              <CardSubtitle>
                Select any practice areas that reflect what your law firm offers. These can be
                edited, added, or deleted later. If you don&#8217;t see what you offer, you can
                manually add them after your account set up is complete.
              </CardSubtitle>
              <div className="flex flex-wrap gap-4">
                <SelectButton label="Alcohol/Cannabis" />
                <SelectButton label="Civil Rights" />
                <SelectButton label="Corporate" />
                <SelectButton label="Criminal Defense" />
                <SelectButton label="Employment" />
                <SelectButton label="IP" />
                <SelectButton label="Immigration" />
                <SelectButton label="Insolvency" />
                <SelectButton label="Family" />
                <SelectButton label="Litigation" />
                <SelectButton label="Personal Injury" />
                <SelectButton label="Real Estate" />
                <SelectButton label="Wills and Estates" />
              </div>
              <Button borderRadius="md" label="Next" onClick={nextStep} variant="primary" />
              <div className="flex justify-between">
                <NavigationLink label="Go back" direction="prev" onClick={prevStep} />
                <NavigationLink label="Skip this step" direction="next" onClick={nextStep} />
              </div>
            </div>
          )}

          {/* Step 6 */}
          {currentStep === 6 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'completed' },
                    { label: 'Account Info', status: 'active' },
                    { label: 'Confirmation', status: 'inactive' },
                  ]}
                />
              </div>
              <CardTitle>Add your branding</CardTitle>
              <CardSubtitle>
                Your logo and brand color will be displayed on your landing pages, funnels, and
                workflows. This can be added, changed, or removed at anytime.
              </CardSubtitle>
              <div className="flex gap-6 flex-col md:flex-row">
                <DocumentUpload
                  label="Drag and drop your logo here, or:"
                  accept="image/*"
                  onFileSelect={(file) => {
                    console.log('Logo uploaded:', file.name);
                  }}
                />
                <div className="flex items-center gap-6">
                  <LoadingSpinner
                    size={32}
                    title="Law Firm Logo.png"
                    subtitle="56% 23 seconds remaining"
                  />
                  <div className="flex gap-2">
                    <Icon name="pause" src="/icons/pause.svg" size={16} />
                    <Icon name="x-circle" src="/icons/x-circle.svg" size={16} />
                  </div>
                </div>
              </div>
              <TextField
                label="Brand Hex Code"
                onChange={() => {}}
                placeholder="#000000"
                state="default"
                value=""
                variant="form"
              />
              <Button
                borderRadius="md"
                label="Finish Account Set Up"
                onClick={nextStep}
                variant="primary"
              />
            </div>
          )}

          {/* Step 7 */}
          {currentStep === 7 && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image src="/images/logo.png" alt="Logo" height="48" width="190" />
              </div>
              <div className="my-8">
                <StepIndicator
                  steps={[
                    { label: 'Personal Info', status: 'completed' },
                    { label: 'Account Info', status: 'completed' },
                    { label: 'Confirmation', status: 'completed' },
                  ]}
                />
              </div>
              <div>
                <Icon name="pause" src="/icons/file-check.svg" size={48} />
                <CardTitle>Account activated!</CardTitle>
              </div>
              <CardSubtitle>
                Your account is now active! Log in to start creating landing pages, funnels, and
                workflows for your potential clients.
              </CardSubtitle>
              <Button
                borderRadius="md"
                label="Log in to Your Account"
                onClick={handleSubmit}
                variant="primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
