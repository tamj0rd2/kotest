plugins {
   id("kotlin-conventions")
   id("io.kotest.multiplatform")
}

kotlin {
   if (!project.hasProperty(Ci.JVM_ONLY)) {
      js(IR) {
         browser()
         nodejs()
      }
   } else {
      // Make sure every project has at least one valid target, otherwise Kotlin compiler will complain
      jvm()
   }
}
