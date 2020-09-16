import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label for="validationTextarea">Profile Summary</label>
            <textarea class="form-control" rows="10"
              id="validationTextarea"
              placeholder="Describe Here" required></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
            <div class="col text-right mt-2 px-0">
              <span class="small-text-light ">4000 Characters Left</span>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5">Save</button>

      </form>
    </>
  );
}

export default About