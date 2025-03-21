function generateInvoice1() {
  // Get form values
  document.getElementById("invPassenger").innerText =
    document.getElementById("passengerName").value;
  document.getElementById("invTrain").innerText =
    document.getElementById("trainName").value;
  document.getElementById("invFrom").innerText =
    document.getElementById("fromStation").value;
  document.getElementById("invTo").innerText =
    document.getElementById("toStation").value;
  document.getElementById("invDate").innerText =
    document.getElementById("journeyDate").value;
  document.getElementById("invClass").innerText =
    document.getElementById("className").value;
  document.getElementById("invSeat").innerText =
    document.getElementById("seatNumber").value;
  document.getElementById("invFare").innerText =
    "BDT " + document.getElementById("fare").value;

  //   // Show invoice container
  //   document.getElementById("invoiceContainer").classList.remove("hidden");

  //   // Convert invoice to PDF
  //   html2canvas(document.getElementById("invoice")).then((canvas) => {
  //     let imgData = canvas.toDataURL("image/png");
  //     let pdf = new jspdf.jsPDF();
  //     pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
  //     pdf.save("ticket.pdf");
  //   });
}

function generateInvoice() {
  let doc = new jspdf.jsPDF();

  // Add Title with Border
  doc.setFontSize(18);
  doc.text("Bangladesh Railway", 80, 20);
  doc.setFontSize(12);
  doc.text("Ticket Confirmation", 85, 30);
  doc.line(10, 35, 200, 35); // Header separator

  // Outer Border (Full Ticket)
  doc.rect(5, 10, 200, 100); // (x, y, width, height)

  // Inner Border for Ticket Details
  doc.rect(8, 40, 194, 60); // Slightly inside the outer border

  // Ticket Details
  doc.setFontSize(10);
  doc.text(
    `Passenger Name: ${document.getElementById("passengerName").value}`,
    10,
    50
  );
  doc.text(`Train No.: ${document.getElementById("trainName").value}`, 120, 50);
  doc.text(`From: ${document.getElementById("fromStation").value}`, 10, 60);
  doc.text(`To: ${document.getElementById("toStation").value}`, 120, 60);
  doc.text(
    `Journey Date: ${document.getElementById("journeyDate").value}`,
    10,
    70
  );
  doc.text(`Class: ${document.getElementById("className").value}`, 120, 70);
  doc.text(`Seat No.: ${document.getElementById("seatNumber").value}`, 10, 80);
  doc.text(`Fare (BDT): ${document.getElementById("fare").value}`, 120, 80);

  doc.line(10, 90, 200, 90); // Separator before note

  // Note with Border
  doc.rect(8, 92, 194, 15); // Small box for note
  doc.setFontSize(9);
  doc.text(
    "Note: This is a system-generated ticket. Please carry a valid ID proof.",
    10,
    100
  );

  // Save PDF
  doc.save("Bangladesh_Railway_Ticket.pdf");
}

function generateQRCode(doc) {
  let qrData = `Passenger: ${
    document.getElementById("passengerName").value
  }\nTrain: ${document.getElementById("trainName").value}`;

  let qrCanvas = document.createElement("canvas");
  let qr = new QRCode(qrCanvas, {
    text: qrData,
    width: 80,
    height: 80,
  });

  setTimeout(() => {
    let qrImage = qrCanvas.toDataURL("image/png");
    doc.addImage(qrImage, "PNG", 80, 105, 40, 40);
    doc.save("Bangladesh_Railway_Ticket.pdf");
  }, 500);
}
