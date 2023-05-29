import * as R from './styles'
import PropTypes from 'prop-types';

 const RoadMap = ({roadMap}) => {
  return (
    <R.RoadMap>
            {roadMap.map((item, key) => (
              <R.RoadMapItem key={key}>
                <R.RoadMapItemTitle url={item.urlBack}><p>{item.date}{item.dateIcon && <img src={item.dateIcon}/>}</p></R.RoadMapItemTitle>
                <R.RoadMapItemRightLeft>
                  <R.RoadMapItemLeft>{item.left.map((itemLeft, key) => ( <p key={key}><img src={item.url[key]}/> {itemLeft}</p>))}</R.RoadMapItemLeft>
                  <R.RoadMapItemRight>{item.right.map((itemRight, key) => ( <p key={key}><img src={item.url[key]}/> {itemRight}</p>))}</R.RoadMapItemRight>
                </R.RoadMapItemRightLeft>
                {item.dateEnd !== '' && <R.RoadMapItemTitle url={item.urlBackEnd}><p>{item.dateEnd}</p></R.RoadMapItemTitle>}
            </R.RoadMapItem>
            ))}         
    </R.RoadMap> 
  )
}

RoadMap.propTypes = {
  roadMap: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    left: PropTypes.arrayOf(PropTypes.string).isRequired,
    right:PropTypes.arrayOf(PropTypes.string).isRequired,
  }))
}

export default RoadMap

