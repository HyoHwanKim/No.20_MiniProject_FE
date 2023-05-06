import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';

const WriteBtnSection = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 700px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 10px;
`

const WriteExitBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

const WriteSaveBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }
`



function Write() {
  const editorRef = useRef(null)

  const handleFocus = useCallback(() => {
    console.log('focus!!')
  }, []);

  return (
    <div>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        initialValue="내용을 입력하세요"
        ref={editorRef}
        onFocus={handleFocus}
      />
      <WriteBtnSection>
        <WriteExitBtn>나가기</WriteExitBtn>
        <WriteSaveBtn>출간하기</WriteSaveBtn>
      </WriteBtnSection>
    </div>
  )
}

export default Write
