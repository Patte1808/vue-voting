<template>

  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link to="/" class="mdl-navigation__link">Create poll</router-link>
          <router-link to="/polls/1" class="mdl-navigation__link">Show first poll</router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link to="/" class="mdl-navigation__link">Create poll</router-link>
        <router-link to="/polls/1" class="mdl-navigation__link">Show first poll</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-cell mdl-cell--4-col">
            <router-view class="view"></router-view>
          </div>
          <div class="mdl-layout-spacer"></div>
        </div>
      </div>
    </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
