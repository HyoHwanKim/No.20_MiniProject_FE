import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useRef, useCallback } from 'react';

import {
  WriteBtnSection,
  WriteExitBtn,
  WriteSaveBtn,
  WriteTitleInput,
} from '../components/styles';
import Header from './Navbar';
import { useState } from 'react';
import axios from 'axios';

function Write() {
  const editorRef = useRef(null);
  const handleFocus = useCallback(() => {
    // console.log('focus!!');
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    content: '내용을 입력하세요',
  });


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4001/posts', formData);
    console.log('제출되었습니다.');
  };

  return (
    <>
      <Header />
      <form onSubmit={onSubmitHandler}>
        <div>
          <WriteTitleInput
            type="text"
            placeholder="제목을 입력하세요"
            value={formData.title}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                title: e.target.value,
              }));
            }}
          />

        </div>

        <Editor
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          initialValue={formData.content}
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              content: e.target.value,
            }));
          }}
          ref={editorRef}
          onFocus={handleFocus}
        />


        <WriteBtnSection>
          <WriteExitBtn>나가기</WriteExitBtn>
          <WriteSaveBtn type="submit">출간하기</WriteSaveBtn> {/* 수정: type="submit" 추가 */}
        </WriteBtnSection>
      </form>
    </>
  );
}

export default Write;
