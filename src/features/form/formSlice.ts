import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface FormState {
    value: number;
}

const initialState: FormState = {
    value: 0,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        incremented: state => {
            state.value += 1;
        },
        decremented: state => {
            state.value -= 1;
        },
        incrementedByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { incremented, decremented, incrementedByAmount } = formSlice.actions;

export const selectForm = (state: RootState) => state.form.value;

export default formSlice.reducer;
