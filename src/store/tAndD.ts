import { createSlice } from '@reduxjs/toolkit';

const tAndD = createSlice({
  name: 'tAndD',
  initialState: {
    title: '제목 없는 설문지',
    description: '설문지 설명',
  },
  reducers: {
    // 설문지 제목 추가, 편집 // 설문지 설명 추가, 편집
    editTAndD: (state, action) => {
      const { title } = action.payload;
      const { description } = action.payload;

      state.title = title;
      state.description = description;
    },
  },
});

export default tAndD;
export const { editTAndD } = tAndD.actions;
