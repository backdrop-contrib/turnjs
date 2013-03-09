Installation
------------

Download and enable the turnjs module.

Clone the turn.js file into the sites/all/libraries/turn.js/ folder:

cd sites/all/libraries
git clone https://github.com/blasten/turn.js.git

Usage
-----

Add an image field to your chosen content type.
Set 'number of values' for the image field to 'unlimited'.

In the 'manage display' tab for your content type:
admin/structure/types/manage/YOUR-CONTENT-TYPE/display
... in the FORMAT drop-down for the image field, select 'turn.js'.

Select the cog-wheel control to the right of the image field row, to set the 
image style and page display size for your turn.js flip-book.

Create a node, and add some images to the multi-value image field.
Enjoy the turn.js flip-book effect.

Licensing
---------

At time of writing, the author of the turn.js javascript library requires you to
buy a license for commercial use.

Please refer to http://www.turnjs.com/get for licensing details.

