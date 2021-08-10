import React from 'react';

const CItem = ({item}) => {
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
              <ul>
                <li>
                  <strong>Actor Name:</strong> {item.portrayed}
                </li>
                <li>
                  <strong>Occupation:</strong> {item.occupation}
                </li>
                <li>
                  <strong>Birthday:</strong> {item.birthday}
                </li>
                <li>
                  <strong>Status:</strong> {item.status}
                </li>
                <li>
                  <strong>Nickname:</strong> {item.nickname}
                </li>
                <li>
                  <strong>Portrayed as:</strong> {item.name}
                </li>
                <li>
                  <strong>Appeared in season(s):</strong> {item.appearance}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
}

export default CItem;
