type Props = {
  stepLabels: String[];
  activeStep: Number;
};

const Stepper = ({ stepLabels, activeStep }: Props) => {
  return (
    <ul className="w-full steps">
      {stepLabels.map((label, index) => (
        <li key={index} className={`step ${index <= activeStep ? 'step-primary' : ''}`}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
