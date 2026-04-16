import React from 'react';

const AIandML = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>AI & Machine Learning</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>OpenAI APIs</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>LangChain</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>LangGraph</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>TensorFlow</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>RAG Pipelines</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>ChromaDB / FAISS</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIandML;
