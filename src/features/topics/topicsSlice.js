import { createSlice } from '@reduxjs/toolkit';

const initialState = { topics: {} };

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },
        addQuizIdForTopic: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectAllTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;