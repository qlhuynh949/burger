const React = require('react');

function FormHamburger() {
  return (

    <form>
      <div class="form-group">
        <label for="inputHamburgerTextArea">Enter in Hambuger</label>
        <p><textarea class="form-control" id="inputHamburgerTextArea" rows="3"></textarea></p>
        <p><button type="button" class="btn btn-primary btn-lg" id="submitHamburger">Submit</button></p>
      </div>
    </form>
    
  );
}
module.exports = FormHamburger;