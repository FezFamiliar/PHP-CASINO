<?php include 'header.php'; ?>
<section class="dice-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12" style="text-align:center;">
          <div class="container">
            <?php for ($i = 0 ; $i < 6; $i++): ?>
              <div class="dice <?php echo 'dice_'.$i; ?>">
                <?php if($i == 2 || $i == 3): ?>
                  <span></span>
                <?php endif; ?>
                <?php if($i == 4): ?>
                  <span class="side"></span>
                  <span class="center"></span>
                <?php endif; ?>
                <?php if($i == 5): ?>
                  <span class="side"></span>
                  <span class="center"></span>
                <?php endif; ?>
              </div>
            <?php endfor; ?>
          </div>
          <div class="container">
            <button class="btn btn-primary" id="roll">Roll!</button>
            <p id="msg-roll"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
