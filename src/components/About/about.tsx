import React, {useState} from 'react';
import styled from './about-styles.module.scss';
import ProgressBar from '../ProgressBar/progress-bar';
import avatar from '../../asset/images/avatar.jpg';

function AboutComponent({ backgroundColor}: any) {
  const [techs,] = useState(['Oracle', 'Microsoft SQL', 'Visio', 'Balsamiq']);
  return (
      <>
        <div
          className={styled.container}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className={styled.innerWidth}>
            <div className={styled.content}>
              <div className={styled.avatar}>
                <img src={avatar} loading="lazy" />
              </div>
              <h2>Hi, I'm a Business Analyst</h2>

              <div className={styled.slash}>
                <p>
                I have been working in the IT industry for more than 3 years building my career in Business
                Analyst, experiencing in various domain knowledge such as: Healthcare, Education, POS system,
                Supply Chain and Insurance.
                </p>
                <p>
                In addition, I have passion for technology, business process, people and always willing to take
                more challenges to improve and develop myself.
                </p>
                <p>
                Individual preferences would differ from person to person but to me, I enjoy reading book and the knowledge,perspective that my reading gives me has strengthened my communication and presentation ability.
                </p>
              </div>

              <div className={styled.skills}>
                <div className={styled.sub}>Technical and skills</div>
                <div className={styled.skillsDetail}>
                  <div className={styled.highlight}>
                    <ProgressBar
                      {...{
                        name: "English",
                        value: "0.90",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    <ProgressBar
                      {...{
                        name: "Communication",
                        value: "0.85",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    
                    <ProgressBar
                      {...{
                        name: "Agile",
                        value: "0.6",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>

                    <ProgressBar
                      {...{
                        name: "SQL",
                        value: "0.7",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>

                    <ProgressBar
                      {...{
                        name: "Presentation Skill",
                        value: "0.9",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>

                  <ProgressBar
                      {...{
                        name: "Documentation & Writing Skills",
                        value: "0.9",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                  </div>
                  <div className={styled.tech}>
                    <ul className={styled.tags}>
                      {techs.map((x) => (
                        <li className={styled.tag}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutComponent;
