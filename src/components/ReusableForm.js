import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const quizName = props.quiz ? props.quiz.quizName : 'Name';
  const description = props.quiz ? props.quiz.description : 'Description';
  const question1 = props.quiz ? props.quiz.question1 : 'Question 1';
  const question2 = props.quiz ? props.quiz.question2 : 'Question 2';
  const question3 = props.quiz ? props.quiz.question3 : 'Question 3';
  const question4 = props.quiz ? props.quiz.question4 : 'Question 4';

  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor='quizName'>Quiz Name</label>
        <input type='text' name="quizName" defaultValue={quizName} />
        <label htmlFor='description'>Description</label>
        <input type='text' name="description" defaultValue={description} />
        <br/>
        <label htmlFor='question1'>Question1</label>
        <textarea type='text' name='question1' defaultValue={question1}/><br/>
        <label htmlFor='question1'>Question2</label>
        <textarea type='text' name='question2' defaultValue={question2} /><br/>
        <label htmlFor='question1'>Question3</label>
        <textarea type='text' name='question3' defaultValue={question3}/><br/>
        <label htmlFor='question1'>Question4</label>
        <textarea type='text' name='question4' defaultValue={question4} /><br/>

        <button type='submit'>{props.buttonText}</button>
      </form>

    </>
  )
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  quiz: PropTypes.object
}
export default ReusableForm;
