import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>
  shoppingItem = {} as ShoppingItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
  const shoppingItemId = this.navParams.get('shoppingItemId');
  console.log(shoppingItemId);

  this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);

  this.shoppingItemRef$.subscribe(shoppingItem => this.shoppingItem = shoppingItem);
  }
  
  editShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.update(shoppingItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

}
