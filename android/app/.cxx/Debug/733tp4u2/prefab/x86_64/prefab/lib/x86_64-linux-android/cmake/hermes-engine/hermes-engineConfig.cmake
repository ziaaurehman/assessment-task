if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/macbook/.gradle/caches/8.9/transforms/ab634feb0febb1555ef179da09133465/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/macbook/.gradle/caches/8.9/transforms/ab634feb0febb1555ef179da09133465/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

