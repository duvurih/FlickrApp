
const Media = ({
	m: String
});

const Item = ({
	title: String,
	link: String,
	media: Media,
	date_taken: String,
	description: String,
	published: String,
	author: String,
	author_id: String,
	tags: String
});

const Flickr = ({
	title: String,
	link: String,
	description: String,
	modified: String,
	generator: String,
	items: [Item]
});

module.exports ={ Media, Item, Flickr};