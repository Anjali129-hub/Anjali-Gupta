import React from "react";
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest Work</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="mywork-container">
      {mywork_data.map((work, index) => {
  const handleClick = () => {
    window.open(work.w_live || work.w_github, "_blank");
  };

  return (
    <div className="work-card" key={index} onClick={handleClick}>
      <img src={work.w_img} alt={work.w_name} />
      <div className="work-card-content">
        <p>{work.w_name}</p>
      </div>
    </div>
  );
})}

            </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
    )
}

export default MyWork;