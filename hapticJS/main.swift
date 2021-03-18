import Foundation
import AppKit

let performer = NSHapticFeedbackManager.defaultPerformer

let pattern = CommandLine.arguments

if pattern.contains("--alignment") {
    performer.perform(.alignment, performanceTime: .now)
} else if pattern.contains("--levelChange") {
    performer.perform(.levelChange, performanceTime: .now)
} else {
    performer.perform(.generic, performanceTime: .now)
}
