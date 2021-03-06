```css
@mixin noFlexGrid
  @mixin Grid($count, $gutter)
    $gridWidth: 100 / $count
    $gutterSpace: $gutter / $count
    .row
      padding: unquote($gutterSpace  + '%')
      margin: 20px
      overflow: hidden
      &::after
        content: ""
        clear: both
        display: table
      [class*="col-"]
        width: 100%
      @media screen and (min-width: $small) and (max-width: 480px)
        .col
          margin: unquote($gutterSpace * $count + '%') 0
        @for $i from 1 through $count
          .col-sm-#{$i}
            width: unquote(($gridWidth * $i) - $gutter + ($gutterSpace * $i) + '%')
      @media screen and (min-width: $medium)
        .col
          float: left
          + .col
            margin-left: unquote($gutter + '%')
        @for $i from 1 through $count
          .col-md-#{$i}
            width: unquote(($gridWidth * $i) - $gutter + ($gutterSpace * $i) + '%')
      @media screen and (min-width: $large)
        .col
          float: left
          + .col
            margin-left: unquote($gutter + '%')
        @for $i from 1 through $count
          .col-#{$i}
            width: unquote(($gridWidth * $i) - $gutter + ($gutterSpace * $i) + '%')
  @include Grid(12, 2)
```
