const weightGainChart = `
  <table class="food-table">
    <thead>
      <tr>
        <th>Food Item</th>
        <th>Amount</th>
        <th>Calories</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Protein Shake</td>
        <td>1 serving</td>
        <td>500 calories</td>
        <td><img src="https://thedaily9.in/wp-content/uploads/2023/01/Protein-shakes.jpg" alt="Protein Shake"></td>
      </tr>
      <tr>
        <td>Chicken Breast</td>
        <td>100g</td>
        <td>300 calories</td>
        <td><img src="https://www.licious.in/blog/wp-content/uploads/2022/01/Thinly-Sliced-Chicken-Breast-Fillet-.jpg" alt="Chicken Breast"></td>
      </tr>
      <tr>
        <td>Brown Rice</td>
        <td>1 cup</td>
        <td>200 calories</td>
        <td><img src="https://manjilas.com/wp-content/uploads/2022/02/v.jpg" alt="Brown Rice"></td>
      </tr>
      <tr>
        <td>Broccoli</td>
        <td>1 cup</td>
        <td>50 calories</td>
        <td><img src="https://desihalalgrocery.com/cdn/shop/products/Broccoli.jpg?v=1599368163" alt="Broccoli"></td>
      </tr>
    </tbody>
  </table>
`;

const weightLossChart = `
  <table class="food-table">
    <thead>
      <tr>
        <th>Food Item</th>
        <th>Amount</th>
        <th>Calories</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Greek Yogurt</td>
        <td>1 serving</td>
        <td>100 calories</td>
        <td><img src="https://www.bigbasket.com/media/uploads/p/l/40281258_1-milky-mist-greek-yogurt-natural-high-protein-no-added-sugar.jpg" alt="Greek Yogurt"></td>
      </tr>
      <tr>
        <td>Salmon</td>
        <td>100g</td>
        <td>200 calories</td>
        <td><img src="https://downshiftology.com/wp-content/uploads/2023/08/Poached-Salmon-main-500x500.jpg" alt="Salmon"></td>
      </tr>
      <tr>
        <td>Quinoa</td>
        <td>1 cup</td>
        <td>150 calories</td>
        <td><img src="https://m.media-amazon.com/images/I/61ZQqAx7MkL._AC_UF1000,1000_QL80_.jpg" alt="Quinoa"></td>
      </tr>
      <tr>
        <td>Spinach</td>
        <td>1 cup</td>
        <td>25 calories</td>
        <td><img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/06/GettyImages-652986635-3dffa4d.jpg?quality=90&resize=556,505" alt="Spinach"></td>
      </tr>
    </tbody>
  </table>
`;

const chart = document.getElementById("chart");

document.getElementById("weight-gain").addEventListener("click", () => {
  chart.innerHTML = weightGainChart;
});

document.getElementById("weight-loss").addEventListener("click", () => {
  chart.innerHTML = weightLossChart;
});
document.getElementById('calculate').addEventListener('click', function() {
  var weight = document.getElementById('current-weight').value;
  var calories = weight * 20;
  document.getElementById('calories-result').textContent = "Recommended daily calories intake: " + calories + " kcal";
});
