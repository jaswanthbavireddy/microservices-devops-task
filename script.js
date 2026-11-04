function renderTable(tableId, headers, rows) {
  const table = document.getElementById(tableId);
  let html = "<tr>" + headers.map(h => "<th>" + h + "</th>").join("") + "</tr>";
  rows.forEach(r => {
    html += "<tr>" + r.map(c => "<td>" + c + "</td>").join("") + "</tr>";
  });
  table.innerHTML = html;
}

function loadUsers() {
  renderTable("dataTable", ["ID", "Name", "Email", "City"],
    users.map(u => [u.id, u.name, u.email, u.city]));
}

function loadProducts() {
  renderTable("dataTable", ["ID", "Product", "Price (INR)", "Stock"],
    products.map(p => [p.id, p.name, "₹" + p.price, p.stock]));
}

function loadOrders() {
  renderTable("dataTable", ["Order ID", "Customer", "Product", "Qty", "Status"],
    orders.map(o => {
      const u = users.find(x => x.id === o.userId);
      const p = products.find(x => x.id === o.productId);
      return [o.id, u.name, p.name, o.qty, '<span class="badge">' + o.status + "</span>"];
    }));
}
