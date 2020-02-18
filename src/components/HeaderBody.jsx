import React from 'react';

function HeaderBody() {
  const headerBodyStyle = {
    height: '164px',
    width: '100%',
    margin: '0',
    backgroundColor: 'rgb(50,50,175)'
  }
    return(
      <div className="HeaderBody">
      <style jsx>{`
        .HeaderBody {
          height: 164px;
          width: 100%;

          margin-top: -5px;
          background-image: url('https://styles.redditmedia.com/t5_2qh1o/styles/bannerBackgroundImage_wmbf6g1dei301.png');
          background-size: auto 164px;
          background-repeat: no-repeat;
        }

        .title {
          text-align: center;
          line-height: 150px;
          font-size: 100px;
          margin: 0px;
        }
        `}
        </style>

      <h1 className="title">r/aww</h1>
      </div>
    );
}

export default HeaderBody;
