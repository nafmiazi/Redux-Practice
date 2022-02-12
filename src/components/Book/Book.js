import React from "react";
import { 
  HiCheckCircle,
  HiMinusCircle,
  HiPlusCircle, 
} from 'react-icons/hi';
import styles from './book.module.css';

import {addToFinishedList, addToReadingList, removeFromFinishedList, removeFromReadingList} from '../../redux/actions/bookAction';
import {useDispatch} from "react-redux";

const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis, id} = props.book;
  const identifier = props.identifier;
  const dispatch = useDispatch();
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {
          identifier === 'discover' && <HiPlusCircle onClick={()=> dispatch(addToReadingList(props.book))} title="Add to Reading" className={styles.plus_icon} />
        }
        {
          identifier === 'readinglist' && <HiMinusCircle onClick={()=> dispatch(removeFromReadingList(id))} title="Remove from list" className={styles.minus_icon} />
        }
        <br />
        {
          identifier === 'readinglist' && <HiCheckCircle onClick={()=> dispatch(addToFinishedList(props.book))} title="Mark as Finish" className={styles.check_icon} />
        }
        {
          identifier === 'finishedlist' && <HiMinusCircle onClick={()=> dispatch(removeFromFinishedList(id))} title="Remove from list" className={styles.minus_icon} />
        }
      </div>
    </div>
  );
};

export default SingleBook;
