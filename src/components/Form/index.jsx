import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormTitle from "./FormTitle";

const Form = ({ onSubmit, title, value, onChange, bgColor, buttonText}) => {
    return ( 
            <FormContainer onSubmit={onSubmit}>
                <FormTitle title={title} />
                <FormInput
                    value={value}
                    onChange={onChange}
                    bgColor={bgColor}
                    buttonText={buttonText}
                />
            </FormContainer>
     );
}
 
export default Form;