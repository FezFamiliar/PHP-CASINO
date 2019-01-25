<?php include 'header.php'; ?>
<section>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <label for="list-names" class="italic"><i>Each name should be added on a new line or seperated by a comma</i></label>
        <textarea name="list-names" class="form-control" rows="8" cols="80" id="list-names" placeholder="Enter names here"></textarea>
        <button  class="btn btn-primary" id="start-winner">Start!</button>
      </div>
      <div class="col-md-6">
        <h1 id="msg-winner"></h1>
      </div>
    </div>
  </div>
</section>
