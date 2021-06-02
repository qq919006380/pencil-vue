#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$FILE_PATH/$NAME"
mkdir -p "$FILE_PATH/$NAME/src"


cat > $DIRNAME/src/index.vue <<EOF
<template>
    <div class="pencil_host pencil_${NAME}" ref="host"></div>
</template>
<script>
import { render } from "../../_util/util.js";
import { ref, onMounted } from "vue";
import '../../_style/index.less'
export default {
    props:{},
    name:"${NAME}",
    setup(props) {
      const host = ref(null);
      let hostMap = null;
      onMounted(() => {
        hostMap = new render(host.value);
      });
      return {host}
    }
}
</script>
<style lang="less">

</style>
EOF

cat <<EOF >"$DIRNAME/index.js"
import ${NAME} from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
${NAME}.install = function (Vue) {
  Vue.component(${NAME}.name, ${NAME})
}

// 导出组件
export default ${NAME}

EOF

