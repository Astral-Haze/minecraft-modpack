GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.heightRangeUniform(5, 213)
    })
    event.modify("gtceu:scheelite_vein", vein => {
        vein.heightRangeUniform(20, 256)
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.heightRangeUniform(30, 256)
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.heightRangeUniform(10, 341)
    })
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.heightRangeUniform(20, 341)
    })
    event.modify("gtceu:naquadah_vein", vein => {
        vein.heightRangeUniform(10, 384)
    })
})
