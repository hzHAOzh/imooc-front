<template>
  <m-popover class="flex items-center" placement="bottom_left">
    <template #reference>
      <div
        class="guide-my relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <!-- 头像 -->
        <img
          v-lazy
          class="w-3 h-3 rounded-sm"
          src="https://assets.leetcode.cn/aliyun-lc-upload/users/hzhaozh/avatar_1709639960.png"
        />
        <!-- 箭头 -->
        <m-svg-icon
          class="h-1 w-1 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <!-- vip 图标 -->
        <m-svg-icon
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
        />
      </div>
    </template>
    <!-- 气泡区域，登录后展示操作列表 -->
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuArr"
        :key="item.id"
      >
        <m-svg-icon
          class="w-1.5 h-1.5 mr-1"
          :name="item.icon"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class="text-zinc-800 dark:text-zinc-300 text-sm">{{
          item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
const menuArr = [
  { id: '0', title: '个人资料', icon: 'profile', path: '/profile' },
  { id: '1', title: '升级 VIP', icon: 'vip-profile', path: '/member' },
  { id: '2', title: '退出登录', icon: 'logout', path: '' }
]
</script>

<style lang="scss" scoped></style>
