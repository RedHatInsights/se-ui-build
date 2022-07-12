interface ConfigurationFormProps {
    configuration?: object;
    onChange: (model: any) => void;
    registerValidation: (validationFunction: () => boolean) => void;
    schema: object;
    readOnly?: boolean;
}
declare const ConfigurationForm: (props: ConfigurationFormProps) => JSX.Element;
export default ConfigurationForm;
