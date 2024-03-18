interface ConfirmProps {
    formData: {
        firstName: string;
        lastName: string;
        email: string;
    };
    onEdit: (step: number) => void; // 編集ボタンがクリックされたときに呼ばれる関数
}

export const Confirm: React.FC<ConfirmProps> = ({ formData, onEdit }) => {
    return (
        <div>
            <h2>Confirm</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <button onClick={() => onEdit(1)}>Edit Step 1</button>
            <button onClick={() => onEdit(2)}>Edit Step 2</button>
            <button type="submit">Submit</button>
        </div>
    );
};
