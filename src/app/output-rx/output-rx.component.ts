import { Component, OnInit } from '@angular/core';
import { OutputRxService } from '../output-rx.service';

@Component({
  selector: 'app-output-rx',
  templateUrl: './output-rx.component.html',
  styleUrls: ['./output-rx.component.scss'],
})
export class OutputRxComponent implements OnInit {
  state: boolean = false;
  /**
   * đây là khai báo rút gọn của TypeScript constructor  kèm khai báo biến class luôn.
   * userService: là 1 biến của class.
   * Khi khởi tạo Component này Angular sẽ dùng DI để khởi tạo Component này với service là params.
   */
  constructor(private outputRxService: OutputRxService) {}

  ngOnInit(): void {
    /**
     * lưu ý lambda syntax
     * đây là Rx programming => đăng ký nhận dữ liệu khi có thay đổi từ Service
     */
    this.outputRxService.change.subscribe((isOpen:boolean) => {
      this.state = isOpen;
    });
  }
}
