// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Box = require('grommet/components/Box');

var COLORS = ['brand', 'neutral-1', 'neutral-2', 'neutral-3', 'neutral-4',
  'accent-1', 'accent-2',
  'grey-1', 'grey-2', 'grey-3', 'grey-4', 'light-2', 'light-1',
  'critical', 'warning', 'ok', 'unknown'];

var BoxDoc = React.createClass({

  render: function() {
    var inline = "<Box>\n  ...\n</Box>";

    var coloredBoxes = COLORS.map(function (color) {
      return <Box key={color} colorIndex={color} pad="small">{color}</Box>;
    });

    return (
      <DocsArticle title="Box" colorIndex="neutral-3">

        <p>General purpose flexible box layout. This does not support all of the
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"> flexbox capabilities</a>.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle    {"{string}"}</code></dt>
            <dd>
              Custom title used by screen readers. Default is "Box".
              Only used if onClick handler is specified.
            </dd>
            <dt><code>align        start|center|end</code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>appCentered  true|false</code></dt>
            <dd>Whether the box background should stretch across an App that is centered.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code></dd>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout the child components in.
              Defaults to <code>column</code>.</dd>
            <dt><code>focusable         true|false</code></dt>
            <dd>Whether keyboard focus should be added for clickable Boxes. Defaults to <code>true</code>.</dd>
            <dt><code>full         true|horizontal|vertical|false</code></dt>
            <dd>Whether the width and/or height should take the full viewport size.</dd>
            <dt><code>onClick      {"{func}"}</code></dt>
            <dd>Optional click handler.</dd>
            <dt><code>justify      start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>pad          {"none|small|medium|large|{...}"}</code></dt>
            <dd>The amount of padding to put around the contents.
              An object can be specified to distinguish horizontal padding, vertical padding, and padding between child components: <code>
              {"{horizontal: none|small|medium|large, vertical: none|small|medium|large, between: none|small|medium|large}"}
              </code>. Defaults to <code>none</code>.
              Padding set using <code>between</code> only affects components based on the direction set
              (adds horizontal padding between components for <code>row</code>,
              or vertical padding between components for <code>column</code>).
            </dd>
            <dt><code>primary      true|false</code></dt>
            <dd>
              Whether this is a primary Box that will receive skip to main
              content anchor. Default is false.
            </dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>Whether to reverse the order of the child components.</dd>
            <dt><code>responsive   true|false</code></dt>
            <dd>Whether children laid out in a row direction should be
              switched to a column layout when the display area narrows.
              Defaults to <code>true</code>.</dd>
            <dt><code>separator   top|bottom|left|right</code></dt>
            <dd>Add a separator.</dd>
            <dt><code>tag          {"{text}"}</code></dt>
            <dd>The DOM tag to use for the element.
              Defaults to <code>div</code>.</dd>
            <dt><code>texture      {"{url}"}</code></dt>
            <dd>A texture image to apply to the background.</dd>
            <dt><code>wrap         true|false</code></dt>
            <dd>Whether children can wrap if they can't all fit.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
            <Box>
              <div>first</div>
              <div>second</div>
            </Box>
          </div>
          <pre><code className="html hljs xml">{"<Box> ..."}</code></pre>

          <h3>Row</h3>
          <div className="example">
            <Box direction="row">
              <div>first</div>
              <div>second</div>
            </Box>
          </div>
          <pre><code className="html hljs xml">{"<Box direction=\"row\"> ..."}</code></pre>

          <h3>Kitchen sink</h3>
          <div className="example">
            <Box direction="row" align="center" colorIndex="neutral-1" justify="between"
              pad="large" reverse={true} tag="aside">
              <div>first</div>
              <div>second</div>
            </Box>
          </div>
          <pre><code className="html hljs xml">{"<Box direction=\"row\" align=\"center\" colorIndex=\"neutral-1\"\n  justify=\"between\" reverse={true} tag=\"aside\"> ..."}</code></pre>

            <h3>Color indexes</h3>
            <div className="example">
              <Box direction="row" wrap={true}>
                {coloredBoxes}
              </Box>
            </div>
            <pre><code className="html hljs xml">{"<Box colorIndex=\"...\" pad=\"small\"> ..."}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = BoxDoc;
