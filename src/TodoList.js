import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_ITEM } from './store/actionTypes';

const TodoList = (props) => {
    const { inputValue, list, handleInputChange, handleClick, deleteItem } = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => { deleteItem(index) }}>{item}</li>;
                    })
                }

            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: CHANGE_INPUT_VALUE,
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: ADD_LIST_ITEM
            }
            dispatch(action);
        },
        deleteItem(index) {
            const action = {
                type: DELETE_ITEM,
                index
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);