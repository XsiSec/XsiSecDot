import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Post } from './post';
// import { Rand0mPost } from './rand0m';

@Injectable()
export class PostService {
  // Posts Collections.
  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  // Random Collections.
  // rand0mPostCollection: AngularFirestoreCollection<Rand0mPost>;
  // rand0mDoc: AngularFirestoreDocument<Rand0mPost>;

  constructor(private afs: AngularFirestore) {
  // initialize the psotCollection to display in 'order and descending'.
      this.postsCollection = this.afs.collection('posts', ref =>
        ref.orderBy('published', 'desc'));

  // initialize the rand0mCollection to display in 'order and descending'.
      // this.rand0mPostCollection = this.afs.collection('rand0m', ref =>
      // ref.orderBy('published', 'desc' ));
    }

// METHODS FOR POSTS
  getPosts() {
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }
  create(data: Post) {
    this.postsCollection.add(data);
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`);
  }
  delete(id: string) {
    return this.getPost(id).delete();
  }
  update(id: string, FormData) {
    return this.getPost(id).update(FormData);
  }
// // -----------------------ENDS HERE -------------------------------------

//   // Methods for Random Posting.
//   getRand0mPosts() {
//     return this.rand0mPostCollection.snapshotChanges().map(actions => {
//       return actions.map(a => {
//         const data = a.payload.doc.data() as Rand0mPost; // creates an object of rand0mPosts
//         const id = a.payload.doc.id;
//         return {id, ...data};
//       });
//     });
//   }
//   getRand0mData(id: string) {
//     this.rand0mDoc = this.afs.doc<Rand0mPost>(`rand0m/${id}`); // returns the 'ID' for the posts.
//     return this.rand0mDoc.valueChanges();
//   }
//   createRand0m(data: Rand0mPost) {
//     this.rand0mPostCollection.add(data);
//   }
//   getRand0mPost(id: string) {
//     return this.afs.doc<Rand0mPost>(`random/${id}`);
//   }
//   deleteRand0mPost(id: string) {
//     return this.getRand0mPost(id).delete();
//   }
//   updaterand0mPost(id: string, FormData) {
//     return this.getRand0mPost(id).update(FormData);
//   }
// // -----------------------ENDS HERE -------------------------------------


}
