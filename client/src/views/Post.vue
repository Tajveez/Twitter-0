<template>
  <div>
    Post view
    <hr />
    <PostView />
    <PostComments />
  </div>
</template>

<script>
import PostView from "@/components/Post/PostView";
import PostComments from "@/components/Post/PostComments";

export default {
  components: {
    PostView,
    PostComments
  }
};
</script>

<style>
</style>