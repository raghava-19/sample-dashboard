import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { APIresponse, GameDetails } from 'src/app/models/response.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-homecenter',
  templateUrl: './homecenter.component.html',
  styleUrls: ['./homecenter.component.scss']
})
export class HomecenterComponent implements OnInit , OnDestroy{

  public category: string;
  public gamesList: GameDetails[] = [];
  public pageSize: number;
  public itemsperpage = 8;
  public curpage = 1;
  public GameSub: Subscription;
  gameDescription: any;
  @ViewChild ('moredetails') moredetails: NgbModal;
  constructor(
    private http: ClientService,
    public activeroute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {
    this.activeroute.params.subscribe((param)=>{
      console.log('param',param)
      if(param['game-search']){
        this.searchgamesWithParam('metacrit',param['game-search'] )
      } else {
        this.setEquipList();
      }
    })
  }
  public searchgamesWithParam(category: string, search?: any): void {
   this.http.getGamesCategoryList(category,search).subscribe((res: any) => {
    this.gamesList = [...res];
   })
  }

  private setEquipList(){
    this.GameSub = this.http.getGamesList().subscribe((res: any) => {
      this.gamesList = res;
     })
  }

  public opengameDetails(game: GameDetails){
    window.open(game.game_url,'_blank')
  //this.router.navigate(['game',game.id]);
  }

  public onPageChange(pagenum: number){
    this.pageSize = this.itemsperpage * (pagenum - 1);
  }

  openMore(game: GameDetails) {
    this.GameSub = this.http.getGamesId(game.id).subscribe((res: any) => {
      this.gameDescription = res;
      console.table(this.gameDescription);
     })
    const modalRef = this.modalService.open(this.moredetails);
  }



  ngOnDestroy(){
    this.GameSub.unsubscribe();
  }

}
