// Comment-Tagged String Literal Examples (Single quote, Double quote, Backticks)

// js / javascript tests
const jsBacktick = /*js*/`
  function test () {
    return;
  }
`;
const jsDoublequote = /*js*/"function test () { return; }";
const jsSinglequote = /*js*/'function test () { return; }';

const javascriptBacktick = /*javascript*/`
  function test () {
    return;
  }
`;
const javascriptDoublequote = /*javascript*/"function test () { return; }";
const javascriptSinglequote = /*javascript*/'function test () { return; }';

// json5 / json6 / json tests
const json5Backtick = /*json5*/`
  {
    key: "value"
  }
`;
const json5Doublequote = /*json5*/"{ \"key\": \"value\" }";
const json5Singlequote = /*json5*/"{ 'key': 'value' }";

const json6Backtick = /*json6*/`
  {
    key: "value"
  }
`;
const json6Doublequote = /*json6*/"{ \"key\": \"value\" }";
const json6Singlequote = /*json6*/"{ 'key': 'value' }";

const jsonBacktick = /*json*/`
  {
    "key": "value"
  }
`;
const jsonDoublequote = /*json*/"{ \"key\": \"value\" }";
const jsonSinglequote = /*json*/"{ 'key': 'value' }";

// css tests
const cssBacktick = /*css*/`
  div {
    width: 100%;
  }
`;
const cssDoublequote = /*css*/"div { width: 100%; }";
const cssSinglequote = /*css*/'div { width: 100%; }';

// sql tests
const sqlBacktick = /*sql*/`
  SELECT *
  FROM test
  WHERE a = ?
`;
const sqlDoublequote = /*sql*/"SELECT * FROM test WHERE a = ?";
const sqlSinglequote = /*sql*/'SELECT * FROM test WHERE a = ?';

// html tests
const htmlBacktick = /*html*/`
  <div class="test">
    <!-- test comment -->
    <script type="application/javascript">
      alert('test');
    </script>
  </div>
`;
const htmlDoublequote = /*html*/"<div class=\"test\">Hello</div>";
const htmlSinglequote = /*html*/'<div class=\'test\'>Hello</div>';
