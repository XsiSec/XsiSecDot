import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Rand0m } from './rand0m';

@Injectable()
export class Rand0mService {


  // Random Collections.
  rand0mPostCollection: AngularFirestoreCollection<Rand0m>;
  rand0mDoc: AngularFirestoreDocument<Rand0m>;

  constructor(private afs: AngularFirestore) {


  // initialize the rand0mCollection to display in 'order and descending'.
      this.rand0mPostCollection = this.afs.collection('rand0ms', ref =>
      ref.orderBy('published', 'desc' ));
    }

// METHODS FOR POSTS

  // Methods for Random Posting.
  getRand0mPosts() {
    return this.rand0mPostCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Rand0m; // creates an object of rand0mPosts
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
  rand0mGetData(id: string) {
    this.rand0mDoc = this.afs.doc<Rand0m>(`rand0ms/${id}`); // returns the 'ID' for the posts.
    return this.rand0mDoc.valueChanges();
  }
  rand0mCreate(data: Rand0m) {
    this.rand0mPostCollection.add(data);
  }
  rand0mGetPost(id: string) {
    return this.afs.doc<Rand0m>(`rand0ms/${id}`);
  }
  rand0mDeletePost(id: string) {
    return this.rand0mGetPost(id).delete();
  }
  rand0mUpdatePost(id: string, FormData) {
    return this.rand0mGetPost(id).update(FormData);
  }
// -----------------------ENDS HERE -------------------------------------


}
