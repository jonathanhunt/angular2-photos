import { ContentItem } from './content-item.data';

export class Photoset {
  id: string;
  primary: string;
  secret: string;
  server: string;
  farm: number;
  photos: string;
  videos: string;
  title: ContentItem;
  description: ContentItem;
  needs_interstitial: number;
  visibility_can_see_set: number;
  count_views: string;
  count_comments: string;
  can_comment: number;
  date_create: string;
  date_update: string;

  constructor(photoset: any) {
    this.id = photoset.id;
    this.primary = photoset.primary;
    this.secret = photoset.secret;
    this.farm = photoset.farm;
    this.photos = photoset.photos;
    this.videos = photoset.videos;
    this.title = photoset.title;
    this.description = photoset.description;
    this.needs_interstitial = photoset.needs_interstitial;
    this.visibility_can_see_set = photoset.visibility_can_see_set;
    this.count_views = photoset.count_views;
    this.count_comments = photoset.count_comments;
    this.can_comment = photoset.can_comment;
    this.date_create = photoset.date_create;
    this.date_update = photoset.date_update;
  }
}

// {
//   "id": "72157672055007611",
//   "primary": "29191526941",
//   "secret": "d02d451939",
//   "server": "8382",
//   "farm": 9,
//   "photos": "62",
//   "videos": 0,
//   "title": {
//     "_content": "New England and Canada, 2016"
//   },
//   "description": {
//     "_content": ""
//   },
//   "needs_interstitial": 0,
//   "visibility_can_see_set": 1,
//   "count_views": "24",
//   "count_comments": "0",
//   "can_comment": 0,
//   "date_create": "1472314075",
//   "date_update": "1472474419"
// }
