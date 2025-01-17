import { Component, OnInit, VERSION } from '@angular/core';
import jspdf from "jspdf";
import html2canvas from "html2canvas";
const doc = new jspdf();

@Component({
  selector: 'app-quarterly-newsletter',
  templateUrl: './quarterly-newsletter.component.html',
  styleUrls: ['./quarterly-newsletter.component.scss']
})
export class QuarterlyNewsletterComponent implements OnInit {

  // name = "Angular " + VERSION.major;

  public captureScreen() {
    var data = document.getElementById("contentToConvert") as HTMLCanvasElement;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
