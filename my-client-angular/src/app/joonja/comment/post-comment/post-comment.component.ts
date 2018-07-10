import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // insertComment(){
  //   this.commentService.insertComment(this.comment)
  //     .subscribe(() => {
  //       this.router.navigate(['/products/product', this.productQna.p_code]);
  //     });
  // }

}
