import { useState } from 'react';
import { Head } from '~/components/shared/Head';
import FormPage from '~/components/contact/FormPage';
import ConfirmPage from '~/components/contact/ConfirmPage';
import CompletePage from '~/components/contact/CompletePage';
import Stepper from '~/components/shared/Stepper';

const stepLabels = ['入力', '確認', '完了'];

function ContanctIndex() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <FormPage handleNext={handleNext} />;
      case 1:
        return <ConfirmPage handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <CompletePage />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <>
      <Head title="お問い合わせフォーム" />
      <div className="container mx-auto px-8 mt-8 mb-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6">お問い合わせフォーム</h1>
          <div className="mb-8">
            <Stepper stepLabels={stepLabels} activeStep={activeStep} />
          </div>
          {getStepContent(activeStep)}
        </div>
      </div>
    </>
  );
}

export default ContanctIndex;
