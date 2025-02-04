import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../BoardWrite/BoardWrite.css'

const BoardWrite = () => {
  const navigate = useNavigate()

  const [board, setBoard] = useState({
    title: '',
    writer: '',
    type: '',
    content: '',
  })

  const { title, writer, type, content } = board //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    })
  }

  const saveBoard = async () => {
    await axios.post(`http://localhost:3001/board`, board).then((res) => {
      alert('등록되었습니다.')
      navigate('/board/worry')
    })
  }

  const backToList = () => {
    navigate('/board/worry')
  }

  return (
    <>
      <div className="content">
        <div className="write__wrap">
          <div className="write__header">
            <button className="write__category">일반 고민</button>
            <div className="category_more">
              <h4 className="category_title">고민사연</h4>
              <ul className="category_group">
                <li className="category__item">일반 고민</li>
                <li className="category__item">취업/진로</li>
                <li className="category__item">직장</li>
                <li className="category__item">연애</li>
                <li className="category__item">성추행</li>
                <li className="category__item">결혼/육아</li>
                <li className="category__item">대인관계</li>
                <li className="category__item">외모</li>
                <li className="category__item">가족</li>
                <li className="category__item">학업/고시</li>
                <li className="category__item">금전/사업</li>
                <li className="category__item">성생활</li>
                <li className="category__item">이별/이혼</li>
                <li className="category__item">중독/집착</li>
                <li className="category__item">투병/신체</li>
                <li className="category__item">정신건강</li>
                <li className="category__item">LGBT</li>
                <li className="category__item">자아/성격</li>
                <li className="category__item">따돌림</li>
              </ul>
              <h4 className="category_title">응원 사연</h4>
              <ul className="category_group">
                <li className="category__item">응원</li>
              </ul>
              <h4 className="category_title">자유 사연</h4>
              <ul className="category_group">
                <li className="category__item">자유</li>
              </ul>
            </div>
            <div className="write__opt">
              <label htmlFor="opt_input1">
                <input
                  type="checkbox"
                  className="opt_input"
                  name="opt_input"
                  id="opt_input1"
                />
                <span className="opt_txt">닉네임 비공개</span>
              </label>
            </div>
          </div>
          <div className="write__desc">
            <input
              type="text"
              placeholder="당신의 고민을 한줄로 요약해 주세요"
            />
          </div>
          <textarea
            className="write__txt"
            placeholder="전문가의 답변을 받기 위해 자세하게 작성해주세요"
          ></textarea>

          <button type="submit" className="submit">
            작성완료
          </button>
        </div>
      </div>
    </>
  )
}

export default BoardWrite
