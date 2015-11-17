CKEDITOR.allElements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'];
CKEDITOR.stylesSet.add('default', [
    /* Block Styles */
    { 'name': 'Class Subheading', 'element': CKEDITOR.allElements, 'attributes': { 'class': 'subheading' }}
]);

/*
 * Extend ckeditor default settings
 * DOCS: http://docs.ckeditor.com/#!/api/CKEDITOR.dtd
 */
CKEDITOR.dtd.$removeEmpty.span = 0;
